package com.altercode.checkgc.entity;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "tb_client")
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "client_id")
    private Long clientId;

    @Column(length = 100)
    private String name;

    @Column(name = "phone_number", length = 24)
    private String phoneNumber;

    @Column(length = 100)
    private String address;

    @OneToOne(mappedBy = "client", cascade = CascadeType.ALL)
    private ClientAccount account;

    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL)
    private Set<Debt> debts = new HashSet<>();

    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL)
    private Set<Paid> paids = new HashSet<>();

    public Client() {
    }

    public Client(Long clientId, String name, String phoneNumber, String address, ClientAccount account) {
        this.clientId = clientId;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.account = account;
    }

    public Long getClientId() {
        return clientId;
    }

    public void setClientId(Long clientId) {
        this.clientId = clientId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public ClientAccount getAccount() {
        return account;
    }

    public void setAccount(ClientAccount account) {
        this.account = account;
    }

    public Set<Debt> getDebts() {
        return debts;
    }

}
