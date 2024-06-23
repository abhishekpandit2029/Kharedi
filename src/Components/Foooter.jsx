import React from "react";
import BackToTop from "./BackToTop";

function Foooter() {
  const listClassname = "text-white leading-7 text-md transition-all duration-500 font-medium hover:text-[#fe8235] hover:leading-10 hover:border-b-0.5 hover:border-[#fe8235]"
  return (
    <div>
      <footer class="bg-zinc-900 py-8 px-6 border border-[#100c0c] font-sans flex flex-col space-y-4">
        <div className="absolute right-5">
          <BackToTop />
        </div>
        <div class="flex flex-wrap justify-center">
          <div class="col-lg-2 col-md-4 col-sm-6 flex flex-col items-center mb-5 mx-6">
            <h6 className="text-uppercase text-white font-bold relative pb-2.5 mb-[-0.625rem] border-red-400 w-[121px]">
              About
            </h6>
            <ul class="list-unstyled footer-link mt-4 mr-5">
              <li>
                <a href="#" class={listClassname}>Contact Us</a>
              </li>
              <li>
                <a href="#" class={listClassname}>About Us</a>
              </li>
              <li>
                <a href="#" class={listClassname}>Press</a>
              </li>
              <li>
                <a href="#" class={listClassname}>Our Page</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-4 col-sm-6 flex flex-col items-center mb-5 mx-6">
            <h6 class="footer-heading text-uppercase text-white tracking-[0.1875rem] font-bold relative pb-2.5 mb-[-0.625rem] border-b-2.5 border-[#fe8235] w-[121px]">
              Shop by
            </h6>
            <ul class="list-unstyled footer-link mt-4 ml-2 mr-5">
              <li>
                <a href="#" class={listClassname}>Men</a>
              </li>
              <li>
                <a href="#" class={listClassname}>Women</a>
              </li>
              <li>
                <a href="#" class={listClassname}>Indie</a>
              </li>
              <li>
                <a href="#" class={listClassname}>New Arrival</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-4 col-sm-6 flex flex-col items-center mb-5 mx-6">
            <h6 class="footer-heading text-uppercase text-white tracking-[0.1875rem] font-bold relative pb-2.5 mb-[-0.625rem] border-b-2.5 border-[#fe8235] w-[121px]">
              Policy
            </h6>
            <ul class="list-unstyled footer-link mt-4 mr-5 ml-3">
              <li>
                <a href="#" class={listClassname}>Return Policy</a>
              </li>
              <li>
                <a href="#" class={listClassname}>Terms Of Use</a>
              </li>
              <li>
                <a href="#" class={listClassname}>Security</a>
              </li>
              <li>
                <a href="#" class={listClassname}>Privacy</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-4 col-sm-6 flex flex-col items-center mb-5 mx-6">
            <h6 class="footer-heading text-uppercase text-white tracking-[0.1875rem] font-bold relative pb-2.5 mb-[-0.625rem] border-b-2.5 border-[#fe8235] w-[121px]">
              Help
            </h6>
            <ul class="list-unstyled footer-link mt-4 mr-3 ml-1">
              <li>
                <a href="#" class={listClassname}>Payment</a>
              </li>
              <li>
                <a href="#" class={listClassname}>Shipping</a>
              </li>
              <li>
                <a href="#" class={listClassname}>Cancel & Return</a>
              </li>
              <li>
                <a href="#" class={listClassname}>FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div class="text-center bg-zinc-900">
        <p class="footer-alt text-white pb-6 text-sm">
          Copyright &#169; 2024, Abhishek
          Pandit, All Rights Reserved
        </p>
      </div>
    </div>

  );
}

export default Foooter;
