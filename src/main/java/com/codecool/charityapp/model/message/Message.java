package com.codecool.charityapp.model.message;

import java.time.LocalDateTime;
import java.util.logging.Logger;

public class Message {

    private static Logger logger;

    private LocalDateTime timeStamp;
    private String message;
    private Type type;

    public Message(String message, Type type) {

        this.message = message;
        this.type = type;
        this.timeStamp = LocalDateTime.now();
    }

    public void log() {
        logger.info(this.type.toString() + ": " + this.timeStamp + ", " + this.message);
    }

    public LocalDateTime getTimeStamp() {

        return timeStamp;
    }

    public String getMessage() {

        return message;
    }
}
