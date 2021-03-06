import React from "react";
import {
  Heading,
  Text,
  Modal,
  Box,
  Flex,
  QR,
  Button,
  PublicAddress
} from "rimble-ui";
import ModalCard from './ModalCard';
import { useWeb3Context } from 'web3-react'
import BigNumber from 'bignumber.js';

export default function (props) {
  const context = useWeb3Context();
  const { account, accountBalance, accountBalanceDAI, isOpen, closeModal } = props;
  const BNify = s => new BigNumber(String(s));
  const trimEth = eth => {
    return BNify(eth).toFixed(6);
  };
  const setConnector = async connectorName => {
    if (localStorage) {
      localStorage.setItem('walletProvider', '');
    }
    return await context.setConnector(connectorName);
  };
  return (
    <Modal isOpen={isOpen}>
      <ModalCard closeFunc={closeModal}>
        <ModalCard.Body>
          <Flex
            width={["auto", "40em"]}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}>
            <Heading.h2 textAlign={'center'} mb={[2, 3]}>
              Account overview
            </Heading.h2>
            <Flex
              flexDirection={'column'}
              alignItems={'center'}
              justifyContent={'center'}>
              {account &&
                <QR
                  value={props.account}
                  renderAs={'svg'}
                />
              }
              <Box style={{'wordBreak': 'break-word'}}>
                <PublicAddress label="" address={props.account} />
              </Box>
            </Flex>
            <Box>
              <Heading.h4 textAlign={'center'}>Balance</Heading.h4>
              <Text my={3} fontSize={3}>
                {trimEth(accountBalance)} ETH
              </Text>
              <Text my={3} fontSize={3}>
                {trimEth(accountBalanceDAI)} SAI
              </Text>
            </Box>
          </Flex>
        </ModalCard.Body>

        <ModalCard.Footer>
          {(context.active || (context.error && context.connectorName)) && (
            <Button
              mt={[1, 2]}
              size={'medium'}
              px={'80px'}
              borderRadius={4}
              onClick={async () => await setConnector('Infura')}>
              {context.active ? "Log out wallet" : "Reset"}
            </Button>
          )}
        </ModalCard.Footer>
      </ModalCard>
    </Modal>
  );
}
