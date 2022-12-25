package ru.nstu.rgr.controller;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.nstu.rgr.model.Progress;
import ru.nstu.rgr.service.ProgressService;

import java.util.List;

@RestController
@RequestMapping("/progress")
@RequiredArgsConstructor
public class ProgressController {
    private final ProgressService progressService;
    @ApiOperation("Receive all progress")
    @GetMapping
    public List<Progress> getAllProgress() {
        return progressService.findAll();
    }

    @ApiOperation("Create a progress")
    @PostMapping
    public Progress create(@RequestBody Progress progress){
        return progressService.save(progress);
    }

    @ApiOperation("Edit a progress")
    @PutMapping("/{id}")
    public Progress edit(@PathVariable Long id, @RequestBody Progress progress){
        return progressService.edit(id, progress);
    }

    @ApiOperation("Delete a progress")
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        progressService.delete(id);
    }
}
