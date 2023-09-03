package com.course.manager.controller;

import com.course.manager.entities.Course;
import com.course.manager.services.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;


import java.util.List;


@RestController
public class CourseManagerController {

    @Autowired
    private CourseService courseService;


    @PostMapping("/add-courses")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Course> addCourses(@RequestBody Course c) {
        System.out.println(" the collected information is: " +c);
        Course c1 = new Course(c.getId(),c.getTitle(), c.getDescription());
        System.out.println("the object is" + c1);
        Course course = courseService.addCourse(c1);

        return ResponseEntity.status(HttpStatus.CREATED).body(c1);


    }

    @GetMapping("/get-coursesById/{id}")
    public ResponseEntity<Course> getCoursesById(@PathVariable("id") int id) {
        Course c = courseService.getCourseById(id);
        return ResponseEntity.status(HttpStatus.OK).body(c);


    }

    @GetMapping("/get-allCourses")
    public ResponseEntity<List<Course>> getAllCourses() {
        List<Course> c = courseService.getAll();
        return ResponseEntity.status(HttpStatus.OK).body(c);

    }

    @PutMapping("/update-courses/{id}")
    public ResponseEntity<Course> updateCourses(@PathVariable("id") int id, @RequestBody Course course) {
        Course c = courseService.updateCourse(id, course);
        return ResponseEntity.status(HttpStatus.OK).body(c);


    }

    @DeleteMapping("/delete-coursesById/{id}")
    public ResponseEntity<Course> deleteCoursesById(@PathVariable("id") int id) {


        Course c = courseService.deleteCourseById(id);
        return ResponseEntity.status(HttpStatus.OK).body(c);

    }


}
