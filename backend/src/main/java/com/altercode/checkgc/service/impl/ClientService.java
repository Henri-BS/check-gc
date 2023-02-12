package com.altercode.checkgc.service.impl;

import com.altercode.checkgc.dto.ClientDTO;
import com.altercode.checkgc.entity.Client;
import com.altercode.checkgc.entity.ClientAccount;
import com.altercode.checkgc.repository.ClientAccountRepository;
import com.altercode.checkgc.repository.ClientRepository;
import com.altercode.checkgc.service.interf.IClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ClientService implements IClientService {

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private ClientAccountRepository accountRepository;


    @Override
    public Page<ClientDTO> findAllClients(Pageable pageable, String name) {
        Page<Client> list = clientRepository.findAllClients(pageable, name);
        return list.map(x -> new ClientDTO());
    }

    @Override
    public ClientDTO findClientById(Long id) {
        Client find = clientRepository.findById(id).orElse(null);
        assert find != null;
        return new ClientDTO(find);
    }

    @Override
    public ClientDTO saveClient(ClientDTO dto) {

        Client add = new Client();
        add.setName(dto.getName());
        add.setAddress(dto.getAddress());
        add.setPhoneNumber(dto.getPhoneNumber());
        clientRepository.saveAndFlush(add);

        Client find = clientRepository.findById(add.getClientId()).orElse(null);

        ClientAccount account = new ClientAccount();
        account.setClient(find);
        accountRepository.saveAndFlush(account);
        add.setAccount(account);

        return new ClientDTO(clientRepository.save(add));
    }

    @Override
    public ClientDTO updateClient(ClientDTO dto) {
        Client edit = clientRepository.findById(dto.getClientId()).orElse(null);
        assert edit != null;
        edit.setClientId(dto.getClientId());
        edit.setName(dto.getName());
        edit.setPhoneNumber(dto.getPhoneNumber());
        edit.setAddress(dto.getAddress());
        return new ClientDTO(clientRepository.save(edit));
    }

    @Override
    public void deleteClient(Long id) {
        this.clientRepository.deleteById(id);
    }
}
