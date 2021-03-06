import React, { Component } from "react";
import { Heading, Box, Flex, Form, Button, Image, Link } from 'rimble-ui'
import styles from './CryptoInput.module.scss';

class CryptoInput extends Component {
  render() {
    const convertedValue = !isNaN(this.props.trimEth(this.props.IdleDAIPrice)) && !!this.props.IdleDAIPrice ? '~'+this.props.BNify(this.props.defaultValue/this.props.IdleDAIPrice).toFixed(2)+' idleSAI' : '';
    return (
        <>
          <Flex
            maxWidth={['90%','40em']}
            borderRadius={'2rem'}
            border={'1px solid'}
            alignItems={'center'}
            borderColor={'#ccc'}
            p={0}
            mt={['0','1em']}
            mx={'auto'}
            >
              <Box width={[1/10]}>
                <Image src="images/btn-dai.svg" height={this.props.height} ml={['0.5em','1em']} />
              </Box>
              <Box width={[6/10, 5/10]}>
                <Form.Input
                  style={{
                    paddingLeft: '1em',
                    paddingRight: '1em'
                  }}
                  placeholder={`Enter SAI Amount`}
                  value={this.props.defaultValue}
                  type="number"
                  borderRadius='2rem'
                  border='0'
                  borderColor='transparent'
                  boxShadow='none !important'
                  min={0}
                  height={this.props.height}
                  step={0.01}
                  fontSize={[2, 4]}
                  width={'100%'}
                  bg={'transparent'}
                  color={this.props.color}
                  className={[styles.mainInput]}
                  onChange={this.props.handleChangeAmount}
                />
              </Box>
              <Box display={['none','block']} width={2/10}>
                <Form.Input
                  style={{
                    paddingLeft: '0',
                    paddingRight: '10px',
                    textAlign: 'right'
                  }}
                  readOnly={'readOnly'}
                  placeholder={''}
                  value={convertedValue}
                  type="text"
                  border='0'
                  borderColor='transparent'
                  boxShadow='none !important'
                  min={0}
                  height={this.props.height}
                  step={0.01}
                  fontSize={[1, 1]}
                  width={'100%'}
                  bg={'transparent'}
                  color={'grey'}
                  className={[styles.mainInput]}
                />
              </Box>
              <Box width={[3/10, 2/10]}>
                <Button onClick={this.props.handleClick} className={[styles.button]} size={this.props.isMobile ? 'medium' : 'large'} mainColor={'blue'} fontWeight={2} fontSize={[2,3]} px={this.props.isMobile ? [2,3] : [4,5]} my={0} width={1} disabled={this.props.disableLendButton ? 'disabled' : false}>LEND</Button>
              </Box>
          </Flex>
          <Flex maxWidth={['90%','40em']} justifyContent={'space-between'} mt={[2, 2]} mb={[2,3]} mx={'auto'}>
            <Box pl={'5%'}>
              <Heading.h5 color={'darkGray'} fontWeight={1} fontSize={1}>
              {!this.props.isMobile ? 
                  !isNaN(this.props.trimEth(this.props.IdleDAIPrice)) && !!this.props.IdleDAIPrice && `1 idleSAI = ${this.props.trimEth(this.props.IdleDAIPrice)} SAI`
                 : 
                  convertedValue
              }
              </Heading.h5>
            </Box>
            {
              this.props.account && !isNaN(this.props.trimEth(this.props.accountBalanceDAI)) && 
              <Box pr={['5%','20%']}>
                <Heading.h5 color={'darkGray'} fontWeight={1} fontSize={1}>
                  <Link color={'darkGray'} hoverColor={'darkGray'} fontWeight={1} fontSize={1} lineHeight={'1.25'} onClick={ e => this.props.useEntireBalance(this.props.accountBalanceDAI) }>
                    Balance: {!this.props.isMobile ? parseFloat(this.props.accountBalanceDAI).toFixed(6) : parseFloat(this.props.accountBalanceDAI).toFixed(2) } SAI</Link>
                </Heading.h5>
              </Box>
            }
          </Flex>

          <Flex justifyContent={'center'}>
            <Heading.h5 mt={[1, 2]} color={'darkGray'} fontWeight={1} fontSize={1} textAlign={'center'}>
              *This is beta software. Use at your own risk.
            </Heading.h5>
          </Flex>
        </>
    );
  }
}
export default CryptoInput;
