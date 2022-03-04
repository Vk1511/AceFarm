import React from "react";
import { Button } from "antd";
import "./MemberCard.css";

function MemberCard() {
  return (
    <div className="membership_card linear_back common_flex">
      <div className="membership_card_con">
        <div className="membership_card_design_con">
          <div className="membershi_c">
            <div className="membership_card_design_con">
              <div className="membership_card_design card_linear_back">
                <div className="membership_card_label">MEMBERSHIP</div>
                <div className="membership_card_details">
                  <div className="membership_expire">valid 12/23</div>
                  <div className="membership_card_name">Vishw Kadu</div>
                  <div className="membership_card_number">
                    2356 2345 6589 1234
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="membership_card_content">
          <div className="membership_content_head">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </div>
          <div className="membership_card_sub_content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
            officia sunt? Distinctio, vero laudantium ipsa, architecto
            consequatur quia, ipsam porro quam reiciendis omnis in? Odio magnam
            ad alias nihil perferendis.
          </div>
          <div className="membership_content_btn">
            <Button
              type="primary"
              className="membershipt_btn yello_linear_back"
            >
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
