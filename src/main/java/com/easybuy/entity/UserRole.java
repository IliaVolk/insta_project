package com.easybuy.entity;


public enum UserRole {

    ROLE_ADMIN,
    ROLE_USER, UserRole;
    UserRole() {
    }

    /**
     * @return String value of enum without prefix "ROLE_"
     * spring java config automatically adds it, so this method
     * removes prefix to use IDE support
     * Example:
     * UserRole.ROLE_ADMIN.configValue() instead of "ADMIN",
     * where mistake can be made
     */
    public String configValue() {
        return name().substring(5);
    }
}
