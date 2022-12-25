package ru.nstu.rgr.controller;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.nstu.rgr.model.Schoolchilds;
import ru.nstu.rgr.service.SchoolchildsService;

import java.util.List;

@RestController
@RequestMapping("/schoolchild")
@RequiredArgsConstructor
public class SchoolchildsController {
    private final SchoolchildsService schoolchildService;

    @ApiOperation("Receive all schoolchilds")
    @GetMapping
    public List<Schoolchilds> getAllSchoolchilds() {
        return schoolchildService.findAll();
    }

    @ApiOperation("Create a schoolchild")
    @PostMapping
    public Schoolchilds create(@RequestBody Schoolchilds schoolchild){
        return schoolchildService.save(schoolchild);
    }

    @ApiOperation("Edit a schoolchild")
    @PutMapping("/{id}")
    public Schoolchilds edit(@PathVariable Long id, @RequestBody Schoolchilds schoolchild){
        return schoolchildService.edit(id, schoolchild);
    }

    @ApiOperation("Delete a schoolchild")
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        schoolchildService.delete(id);
    }
}
