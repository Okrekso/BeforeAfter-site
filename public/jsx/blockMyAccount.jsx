import React, {
    useState,
    useContext,
    useEffect,
    useCallback,
    useMemo
  } from "react";
  import "../scss/BlockMyAccount.scss";
  export default function BlockMyAccount() {
    return(
<div className="my-account-block">
    <div class="main">
        <div class="col_left">
            <div class="account-profile">
                <div class="account-profile-logo">
                    <img src="img/user.png" alt=""></img>
                </div>
                <div class="account-profile__user">Андрій Петренко</div>
                <div class="account-profile__mail">and***@gmail.com</div>
            </div>
            <div class="account-menu">
                <div class="account-info">
                    <div class="account-info-item">
                        <div class="account-info-item__key">Account balance:</div>
                        <div class="account-info-item__value">3420.30 UAH</div>
                    </div>
                    <div class="account-info-item">
                        <div class="account-info-item__key">Active investment:</div>
                        <div class="account-info-item__value">100.00 UAH</div>
                    </div>    
                </div>  
                <ul class="account-menu-links">
                    <li class="account-menu-links__item ">
                        <a href="#">
                            Account History 
                        </a>
                    </li>

                    <li class="account-menu-links__item active">
                        <a href="#">
                            Account Settings 
                        </a>
                    </li>
                    <li class="account-menu-links__item ">
                        <a href="#">
                                Deposit / Withdrawal 
                        </a>
                    </li>
                    <li class="account-menu-links__item ">
                        <a href="#">
                                Promotions and Bonuses 
                        </a>
                    </li>
                    <li class="account-menu-links__item">
                        <a href="#">Logout</a>
                    </li>
                </ul>
            </div>
        </div> 
        <section class="col_center" id="col_center">
            <div class="account-block-tabs">
                <a href="#" class="account-block-tabs__item active"> ACCOUNT DATA </a>
                <a href="#" class="account-block-tabs__item "> Bonuses </a>
                <a href="#" class="account-block-tabs__item "> SECURITY </a>
            </div>
            <div class="my-account-section">
                <div class="my-account-block">
                        <div class="account-block">
                            <div class="personal-data-info">
                                <div class="grid-container account-profile-page_info">
                                        <div class="grid-row">
                                            <div class="account-profile-page_info_cell"><div class="account-profile-page__name"> First Name:</div><div class="account-profile-page__value">Андрій</div></div>
                                            <div class="account-profile-page_info_cell"><div class="account-profile-page__name"> Country:</div><div class="account-profile-page__value">Ukraine</div></div>
                                            <div class="account-profile-page_info_cell"><div class="account-profile-page__name"> Last Name:</div><div class="account-profile-page__value">Петренко</div></div>
                                            <div class="account-profile-page_info_cell"><div class="account-profile-page__name"> Email:</div><div class="account-profile-page__value">and***@gmail.com</div></div>
                                            <div class="account-profile-page_info_cell"><div class="account-profile-page__name"> City:</div><div class="account-profile-page__value">Львів</div></div>
                                            <div class="account-profile-page_info_cell"><div class="account-profile-page__name"> Phone:</div><div class="account-profile-page__value">38073****097</div></div>
                                        </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div class="my-account-map">
                    <h2>My points</h2>
                </div>
            </div>
        </section>
    </div>
</div>

    );
}
