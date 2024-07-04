import React from "react";

function OrderTracking() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.0810057112126!2d77.62083707454943!3d13.157290210781063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1ecee9082b27%3A0xb50f768355d9535a!2sBettahalsoor%20Cross!5e0!3m2!1sen!2sin!4v1720118014240!5m2!1sen!2sin"
        title="Order Tracking Information"
        style={{
          border: "none",
          width: "500px",
          height: "300px",
          marginLeft: "500px",
          marginTop: "50px",
        }}
      ></iframe>
      <div style={{ marginLeft: "500px" }}>
        <p>
          <h3>On the way </h3>
          <b>Your Order will Deleverd in 30 min </b>
        </p>
        <h5>Thank You</h5>
      </div>
    </div>
  );
}

export default OrderTracking;
