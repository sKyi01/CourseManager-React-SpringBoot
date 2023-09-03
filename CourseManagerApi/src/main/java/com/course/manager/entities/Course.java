package com.course.manager.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "course_manager")
public class Course {
    @Id
    private int id;


    @Column
    private String title;
    @Column
    private String description;

    public Course(int id,String title, String description) {
        this.title = title;
        this.description = description;
        this.id=id;
    }

    public Course() {

    }

    public String getTitle() {

        return this.title;
    }

    public void setTitle(String title) {

        this.title = title;

    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {


        this.description = description;
    }

    public String toString() {

        return "Course : id = ["+this.id+"]title = [" + this.title + "] description = [" + this.description + "]";


    }
    public void setId(int id){

        this.id=id;

    }
    public int getId(){
        return this.id;
    }


}
