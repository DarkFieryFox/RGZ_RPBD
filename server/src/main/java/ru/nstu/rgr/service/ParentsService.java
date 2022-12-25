package ru.nstu.rgr.service;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import ru.nstu.rgr.model.Parents;
import ru.nstu.rgr.repository.ParentsRepository;

@Service
@RequiredArgsConstructor
public class ParentsService extends BasePersistentService<Parents>{

    @Getter(AccessLevel.PROTECTED)
    private final ParentsRepository repo;

    public Parents edit(Long id, Parents parents){
        if (id == null){
            return null;
        }
        Parents parentsFromDb = repo.findById(id).orElse(null);
        if (parentsFromDb == null) return null;
        BeanUtils.copyProperties(parents, parentsFromDb, "id");
        return repo.save(parentsFromDb);
    }
}
