package com.altercode.checkgc.dto;

import com.altercode.checkgc.entity.Client;

import java.io.Serial;
import java.io.Serializable;

public class ClientDTO implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    private Long clientId;
    private String name;
    private String phoneNumber;
    private String address;
    private ClientAccountDTO account;

    public ClientDTO() {
    }

    public ClientDTO(Client entity) {
        clientId = entity.getClientId();
        name = entity.getName();
        phoneNumber = entity.getPhoneNumber();
        address = entity.getAddress();
        account = new ClientAccountDTO(entity.getAccount());
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

    public ClientAccountDTO getAccount() {
        return account;
    }

    public void setAccount(ClientAccountDTO account) {
        this.account = account;
    }
}
