package com.altercode.checkgc.dto;

import com.altercode.checkgc.entity.Status;

public class StatusDTO {

    private String statusId;

    public StatusDTO(Status entity) {
    statusId = entity.getStatusId();
    }

    public String getStatusId() {
        return statusId;
    }

    public void setStatusId(String statusId) {
        this.statusId = statusId;
    }
}
