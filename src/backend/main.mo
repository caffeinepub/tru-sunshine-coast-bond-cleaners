import Time "mo:core/Time";
import Array "mo:core/Array";
import Int "mo:core/Int";
import Order "mo:core/Order";

actor {
  type Enquiry = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    serviceType : Text;
    propertyAddress : Text;
    bedrooms : Text;
    preferredDate : Text;
    message : Text;
    submittedAt : Int;
  };

  module Enquiry {
    public func compare(a : Enquiry, b : Enquiry) : Order.Order {
      Int.compare(a.submittedAt, b.submittedAt);
    };
  };

  var lastEnquiryId = 0;
  var enquiries : [Enquiry] = [];

  public shared ({ caller }) func submitEnquiry(name : Text, email : Text, phone : Text, serviceType : Text, propertyAddress : Text, bedrooms : Text, preferredDate : Text, message : Text) : async Nat {
    let newId = lastEnquiryId + 1;
    lastEnquiryId := newId;

    let newEnquiry : Enquiry = {
      id = newId;
      name;
      email;
      phone;
      serviceType;
      propertyAddress;
      bedrooms;
      preferredDate;
      message;
      submittedAt = Time.now();
    };

    enquiries := enquiries.concat([newEnquiry]);
    newId;
  };

  public query ({ caller }) func getEnquiries() : async [Enquiry] {
    enquiries.sort();
  };

  public query ({ caller }) func getEnquiryCount() : async Nat {
    enquiries.size();
  };
};
