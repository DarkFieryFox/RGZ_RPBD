package ru.nstu.rgr.service;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import ru.nstu.rgr.model.Progress;
import ru.nstu.rgr.repository.ProgressRepository;

@Service
@RequiredArgsConstructor
public class ProgressService extends BasePersistentService<Progress>{

    @Getter(AccessLevel.PROTECTED)
    private final ProgressRepository repo;

    public Progress edit(Long id, Progress progress){
        if (id == null){
            return null;
        }
        Progress progressFromDb = repo.findById(id).orElse(null);
        if (progressFromDb == null) return null;
        BeanUtils.copyProperties(progress, progressFromDb, "id");
        return repo.save(progressFromDb);
    }
}
