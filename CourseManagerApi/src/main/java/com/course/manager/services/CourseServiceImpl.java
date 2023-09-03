package com.course.manager.services;

import com.course.manager.customexception.CourseNotFoundException;
import com.course.manager.entities.Course;
import com.course.manager.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CourseServiceImpl implements CourseService {
    @Autowired
    private CourseRepository courseRepository;

    @Override
    public Course addCourse(Course course) {
        System.out.println("service imple course object " + course);

        Course c = courseRepository.save(course);
        return c;
    }

    @Override
    public Course getCourseById(int id) {
        Optional<Course> c = courseRepository.findById(id);
        if (c.isPresent()) {
            Course course = c.get();
            return course;
        } else {
            throw new CourseNotFoundException("Not Existed");
        }

    }

    @Override
    public List<Course> getAll() {
        Iterable<Course> c = courseRepository.findAll();
        List<Course> course = new ArrayList();
        c.forEach(course::add);

        return course;
    }

    @Override
    public Course updateCourse(int id, Course course) {
        Optional<Course> course1 = courseRepository.findById(id);
        Course course2 = course1.get();
        course2.setTitle(course.getTitle());
        course2.setDescription(course.getDescription());
        Course course3 = courseRepository.save(course2);
        return course3;
    }

    @Override
    public Course deleteCourseById(int id) {
        Optional<Course> c = courseRepository.findById(id);
        Course course = c.get();
        courseRepository.deleteById(id);
        return course;
    }
}
