package com.altercode.checkgc.entity;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "tb_status")
public class Status {

    @Id
    @Column(name = "status_id")
    private String statusId;

    private Integer debtQuantity = 0;

    public Status() {
    }

    public Status(String statusId, Integer debtQuantity) {
        this.statusId = statusId;
        this.debtQuantity = debtQuantity;
    }

    public String getStatusId() {
        return statusId;
    }

    public void setStatusId(String statusId) {
        this.statusId = statusId;
    }

    public Integer getDebtQuantity() {
        return debtQuantity;
    }

    public void setDebtQuantity(Integer debtQuantity) {
        this.debtQuantity = debtQuantity;
    }
}
