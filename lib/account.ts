import { computeAddress, genPrKey, getBase58CheckAddress } from './crypto'

/**
 * Generate a new account
 */
export const generateAccount = (): {
  address: string
  publicKey: string,
  addressBytes: string,
  privateKey: string
} => {
  const { publicKey, privateKey } = genPrKey()
  const addressBytes = computeAddress(publicKey)
  const address = getBase58CheckAddress(addressBytes)

  return { address, publicKey, addressBytes, privateKey }
}
