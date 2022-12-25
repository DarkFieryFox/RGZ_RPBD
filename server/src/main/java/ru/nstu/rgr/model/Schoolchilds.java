package ru.nstu.rgr.model;

import lombok.Data;

import javax.persistence.*;
import java.sql.Date;
import java.util.ArrayList;
import java.util.Collection;

import java.util.List;

@Entity
@Table(name = "schoolchilds")
@Data
public class Schoolchilds {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "surname")
    private String surname;

    @Column(name = "patronymic")
    private String patronymic;

    @Column(name = "address")
    private String address;

    @Column(name = "birthday")
    private Date birthday;

    @Column(name = "year_admission")
    private Integer year_admission;

    @ManyToMany
    @JoinTable(
            name="schoolchild_progress",
            joinColumns = @JoinColumn(name= "schoolchild_id"),
            inverseJoinColumns = @JoinColumn(name= "progress_id")
    )
    private List<Progress> progresss = new ArrayList<>();

    @ManyToMany
    @JoinTable(
            name="schoolchild_parents",
            joinColumns = @JoinColumn(name= "schoolchild_id"),
            inverseJoinColumns = @JoinColumn(name= "parent_id")
    )
    private List<Parents> parents = new ArrayList<>();
}
