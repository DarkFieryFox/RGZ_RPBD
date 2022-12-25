package ru.nstu.rgr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.nstu.rgr.model.Parents;

@Repository
public interface ParentsRepository extends JpaRepository<Parents, Long> {
}
