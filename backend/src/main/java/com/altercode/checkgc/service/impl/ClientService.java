package com.altercode.checkgc.service.impl;

import com.altercode.checkgc.dto.ClientDTO;
import com.altercode.checkgc.entity.Client;
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

    @Override
    public Page<ClientDTO> findAllClients(Pageable pageable) {
        Page<Client> list = clientRepository.findAll(pageable);
        return list.map(x -> new ClientDTO());
    }
}
