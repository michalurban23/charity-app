package com.codecool.charityapp.model.fc;

import org.hibernate.annotations.Type;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import java.util.UUID;

@MappedSuperclass
public abstract class AbstractEntity implements Comparable<AbstractEntity> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Type(type = "pg-uuid")
    private final UUID itemUUID;

    public AbstractEntity() {
        this.itemUUID = java.util.UUID.randomUUID();
    }

    @Override
    public int hashCode() {
        return this.itemUUID.hashCode();
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public UUID getItemUUID() {
        return itemUUID;
    }

    @Override
    public int compareTo(AbstractEntity abstractEntity) {
        if(id == null || abstractEntity.id == null) {
            return this.itemUUID.compareTo(abstractEntity.itemUUID);
        } else {
            return (int) (id - abstractEntity.id);
        }
    }
}
