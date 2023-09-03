package com.course.manager.services;

import com.course.manager.entities.Course;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public interface CourseService {

    public Course addCourse(@RequestBody Course course);

    public Course getCourseById(@PathVariable("id") int id);

    public List<Course> getAll();

    public Course updateCourse(@PathVariable("id") int id, Course course);

    public Course deleteCourseById(@PathVariable("id") int id);


}
