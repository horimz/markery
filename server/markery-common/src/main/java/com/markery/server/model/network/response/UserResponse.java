package com.markery.server.model.network.response;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UserResponse {
    private Long id;

    private String email;

    private String userName;
}
