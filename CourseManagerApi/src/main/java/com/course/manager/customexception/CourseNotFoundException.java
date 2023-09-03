package com.course.manager.customexception;

public class CourseNotFoundException extends RuntimeException {
    public CourseNotFoundException(String text) {
        super(text);


    }


}
