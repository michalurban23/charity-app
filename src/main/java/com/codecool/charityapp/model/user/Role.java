package com.codecool.charityapp.model.user;

public enum Role {
    COORDINATOR,
    CONSULTANT,
    VISOR,
    COORDINATOR_NEW {
        @Override
        public boolean isNew() {
            return true;
        }
    },
    CONSULTANT_NEW {
        @Override
        public boolean isNew() {
            return true;
        }
    };

    public boolean isNew() {
        return false;
    }
}