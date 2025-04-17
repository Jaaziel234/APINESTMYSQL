import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('productos') // nombre exacto de tu tabla
export class MiEntidad {
    @PrimaryGeneratedColumn({ name: 'idProducto' })
  id: number;

  @Column({ name: 'nombre' })
  nombre: string;

  @Column({ name: 'precio', type: 'decimal' })
  precio: number;

    // Agrega más columnas según tu tabla
}