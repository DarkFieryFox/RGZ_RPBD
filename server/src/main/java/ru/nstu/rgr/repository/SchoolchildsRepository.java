package ru.nstu.rgr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.nstu.rgr.model.Schoolchilds;

@Repository
public interface SchoolchildsRepository extends JpaRepository<Schoolchilds, Long> {
}
