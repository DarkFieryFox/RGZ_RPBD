package ru.nstu.rgr.controller;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.nstu.rgr.model.Parents;
import ru.nstu.rgr.service.ParentsService;

import java.util.List;

@RestController
@RequestMapping("/parent")
@RequiredArgsConstructor
public class ParentsController {

    private final ParentsService parentService;

    @ApiOperation("Receive all Parents")
    @GetMapping
    public List<Parents> getAllParents() {
        return parentService.findAll();
    }

    @ApiOperation("Create a parent")
    @PostMapping
    public Parents create(@RequestBody Parents parent){
        return parentService.save(parent);
    }

    @ApiOperation("Edit a parent")
    @PutMapping("/{id}")
    public Parents edit(@PathVariable Long id, @RequestBody Parents parent){
        return parentService.edit(id, parent);
    }

    @ApiOperation("Delete a parent")
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        parentService.delete(id);
    }
}
