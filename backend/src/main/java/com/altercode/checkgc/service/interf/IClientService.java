package com.altercode.checkgc.service.interf;

import com.altercode.checkgc.dto.ClientDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IClientService {

    Page<ClientDTO> findAllClients(Pageable pageable);

    Page<ClientDTO> findClientsByName(Pageable pageable, String name);

    ClientDTO findClientById(Long id);

    ClientDTO saveClient(ClientDTO dto);

    ClientDTO updateClient(ClientDTO dto);

    void deleteClient(Long id);
}
