import prisma from '@libs/prisma'

export async function createUserOneTimeDonation(
  name: string,
  email: string,
  amount: number,
  customer_id: string
) {
  await prisma.donation.create({
    data: {
      name: name,
      email: email,
      amount: amount,
      payment_status: 'SUCCESS',
      payment_method: 'STRIPE',
      payment_type: 'ONETIME',
      customer_id: customer_id,
      User: {
        connectOrCreate: {
          where: {
            email: email,
          },
          create: {
            name: name,
            email: email,
          },
        },
      },
    },
  })
}

export async function createUserMonthlyDonation(
  name: string,
  email: string,
  amount: number,
  customer_id: string
) {
  await prisma.donation.create({
    data: {
      name: name,
      email: email,
      amount: amount,
      payment_status: 'SUCCESS',
      payment_method: 'STRIPE',
      payment_type: 'MONTHLY',
      customer_id: customer_id,
      User: {
        connectOrCreate: {
          where: {
            email: email,
          },
          create: {
            name: name,
            email: email,
            is_monthly: true,
          },
        },
      },
    },
  })
}
