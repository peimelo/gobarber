import { startOfHour } from 'date-fns';
import { getCustomRepository, getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Appointment from '../models/Appointment.entity';
import User from '../models/User.entity';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface Request {
  providerId: string;
  date: Date;
}

class CreateAppointmentService {
  public async execute({ providerId, date }: Request): Promise<Appointment> {
    const appointmentDate = startOfHour(date);

    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const findAppointmentInSameDate = await appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked.');
    }

    const usersRepository = getRepository(User);
    const user = await usersRepository.findOne(providerId);

    if (!user) {
      throw new AppError('Provider not found.');
    }

    const appointment = appointmentsRepository.create({
      providerId,
      date: appointmentDate,
    });

    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
