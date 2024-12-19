package com.altercode.checkgc.service.interf;

import com.altercode.checkgc.dto.ClientDTO;
import com.altercode.checkgc.dto.StatsSalesDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ClientService {


    Page<ClientDTO> findAllClients(Pageable pageable, String name);

    ClientDTO findClientById(Long id);

    ClientDTO findClientByName(String name);

    StatsSalesDTO totalValuesOfSales();

    ClientDTO saveClient(ClientDTO dto);

    ClientDTO updateClient(ClientDTO dto);

    void deleteClient(Long id);


}
