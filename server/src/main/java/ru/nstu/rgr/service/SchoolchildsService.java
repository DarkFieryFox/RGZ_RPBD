package ru.nstu.rgr.service;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import ru.nstu.rgr.model.Schoolchilds;
import ru.nstu.rgr.repository.SchoolchildsRepository;

@Service
@RequiredArgsConstructor
public class SchoolchildsService extends BasePersistentService<Schoolchilds>{
    @Getter(AccessLevel.PROTECTED)
    private final SchoolchildsRepository repo;
    public Schoolchilds edit(Long id, Schoolchilds schoolchild) {
        if (id == null) {
            return null;
        }
        Schoolchilds schoolchildFromDb = repo.findById(id).orElse(null);
        if (schoolchildFromDb == null) return null;
        BeanUtils.copyProperties(schoolchild, schoolchildFromDb, "id");
        return repo.save(schoolchildFromDb);
    }
}
