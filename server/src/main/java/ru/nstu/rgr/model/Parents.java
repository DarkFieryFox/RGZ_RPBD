package ru.nstu.rgr.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "parents")
@Data
public class Parents {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column (name = "id")
    private Long id;

    @Column (name = "name")
    private String name;

    @Column (name = "surname")
    private String surname;

    @Column (name = "patronymic")
    private String patronymic;

    @Column (name = "degree")
    private String degree;

    @Column (name = "address")
    private String address;

}
