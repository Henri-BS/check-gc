package com.altercode.checkgc.entity;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "tb_debt")
public class Debt extends Sale{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "debt_id")
    private Long debtId;

    @Column(name = "debt_date")
    private LocalDate debtDate;

    @Column(name = "debt_days")
    private Integer debtDays;

    public Debt() {
    }

    public Debt(Integer productQuantity, Double productAmount, Product product, Client client, Long debtId, LocalDate debtDate, Integer debtDays) {
        super(productQuantity, productAmount, product, client);
        this.debtId = debtId;
        this.debtDate = debtDate;
        this.debtDays = debtDays;
    }

    public Long getDebtId() {
        return debtId;
    }

    public void setDebtId(Long debtId) {
        this.debtId = debtId;
    }

    public LocalDate getDebtDate() {
        return debtDate;
    }

    public void setDebtDate(LocalDate debtDate) {
        this.debtDate = debtDate;
    }

    public Integer getDebtDays() {
        return debtDays;
    }

    public void setDebtDays(Integer debtDays) {
        this.debtDays = debtDays;
    }
}
