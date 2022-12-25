package ru.nstu.rgr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.nstu.rgr.model.Progress;

@Repository
public interface ProgressRepository extends JpaRepository<Progress, Long> {
}
