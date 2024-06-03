export interface CreateReservationDTO {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
}

export interface UpdateReservationStatusDTO {
  status: 'PENDING' | 'PROCESSED';
}
