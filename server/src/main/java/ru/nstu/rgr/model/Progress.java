package ru.nstu.rgr.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "progress")
@Data
public class Progress {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column (name = "id")
    private Long id;

    @Column (name = "classs")
    private String classs;

    @Column  (name = "year")
    private Integer year;

    @Column (name = "subject")
    private String subject;

    @Column (name = "quarter")
    private Integer quarter;

    @Column (name = "half_yearly")
    private Integer half_yearly;

    @Column (name = "yearly")
    private Integer yearly;

    @Column (name = "exam")
    private Integer exam;

    @Column (name = "finaly")
    private Integer finaly;


}
