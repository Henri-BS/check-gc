package com.altercode.checkgc.entity;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "tb_debt")
public class Debt extends Sale {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "debt_id")
    private Long debtId;

    @Column(name = "debt_date")
    private LocalDate debtDate;

    @Column(name = "charge_date")
    private LocalDate chargeDate;

    @Column(name = "discount")
    private Double discount;

    @Column(name = "debt_days")
    private String debtDays;

    public Debt() {
    }

    public Debt(Integer productQuantity, Double productAmount, Product product,
                Client client, Long debtId, LocalDate debtDate,
                LocalDate chargeDate, Double discount, String debtDays) {
        super(productQuantity, productAmount, product, client);
        this.debtId = debtId;
        this.debtDate = debtDate;
        this.chargeDate = chargeDate;
        this.discount = discount;
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

    public LocalDate getChargeDate() {
        return chargeDate;
    }

    public void setChargeDate(LocalDate chargeDate) {
        this.chargeDate = chargeDate;
    }

    public Double getDiscount() {
        return discount;
    }

    public void setDiscount(Double discount) {
        this.discount = discount;
    }

    public String getDebtDays() {
        return debtDays;
    }

    public void setDebtDays(String debtDays) {
        this.debtDays = debtDays;
    }
}
