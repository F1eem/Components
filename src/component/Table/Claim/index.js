import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { StatusButton } from "../StatusButton";
import { connect } from "react-redux";
import { setTableClaim, setTableItems } from "redux/tableReducer";
import {
  ClaimRow,
  Date,
  History,
  Title,
  WrapperClaim,
  WrapperClaimRows,
  WrapperDescription,
  WrapperStatus,
} from "./units";

const Claim = ({ setTableClaim, currentClaim, setTableItems, config }) => {
  const { currentClaimId } = useParams();
  useEffect(() => {
    setTableItems();
  }, []);

  useEffect(() => {
    setTableClaim(currentClaimId);
  }, [currentClaimId]);

  const addClaimRows = () => {
    return Object.entries(config).reduce((result, [configKey, configItem]) => {
      if (configItem.inOneClaimTable) {
        result.push(
          <ClaimRow>
            <Title>{configItem.title}</Title>
            <div>{currentClaim[configKey] || "-"}</div>
          </ClaimRow>
        );
      }
      return result;
    }, []);
  };
  return (
    <>
      {currentClaim ? (
        <WrapperClaim>
          <div>
            <div>
              <b>
                Обращение №{currentClaim.claimId} от {currentClaim.date}
              </b>
            </div>
            <History>
              <NavLink to={"/table/"}>История обращений</NavLink> > №
              {currentClaim.claimId}
            </History>
          </div>
          <WrapperClaimRows>
            <WrapperStatus>
              <StatusButton status={currentClaim.status} /> <div>...</div>
            </WrapperStatus>
            <WrapperDescription>{currentClaim.description}</WrapperDescription>
            {addClaimRows()}
            <Date>{currentClaim.date}</Date>
          </WrapperClaimRows>
        </WrapperClaim>
      ) : (
        <div>404 error</div>
      )}
    </>
  );
};

const MapStateToProps = ({ table: { currentClaim } }) => ({
  currentClaim,
});

export default connect(MapStateToProps, { setTableClaim, setTableItems })(
  Claim
);
