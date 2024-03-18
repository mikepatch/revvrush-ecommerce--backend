import { PrismaClient } from '@prisma/client';
import { createSlug } from '../src/utils/createSlug';

const prisma = new PrismaClient();

const seedCategories = async () => {
  const categories = [
    {
      id: '2de6d922-1d10-4f09-bd96-93e8f51eea71',
      name: 'Wheels',
    },
    {
      id: '35117863-1e5e-436c-8eaa-f0278e775954',
      name: 'Suspensions',
    },
    {
      id: '8cca6c90-ffd1-45a1-9533-eba556516be1',
      name: 'Exhaust systems',
    },
    {
      id: 'b6ffa21e-32da-403f-b873-012bc4d9a467',
      name: 'Interior',
    },
  ];

  for (const category of categories) {
    try {
      const createdCategory = await prisma.productCategory.create({
        data: {
          ...category,
          slug: createSlug(category.name),
        },
      });
      console.log(`Created category: ${createdCategory.name}`);
    } catch (error) {
      console.error(`Error creating category: ${category.name}`, error);
    }
  }
};

const seedProducts = async () => {
  const products = [
    {
      id: '144cc549-5e12-4241-bc74-edb1d4dec789',
      categoryId: '2de6d922-1d10-4f09-bd96-93e8f51eea71',
      name: 'Volk Racing TE37 Ultra M-Spec',
      price: 1249,
      description:
        "The TE37 Ultra M-Spec is a limited edition wheel that is designed to be the ultimate wheel for the track. It is a 6-spoke design that is made using Volk Racing's Mold Form Forging technology. This technology allows the wheel to be both lightweight and strong. The TE37 Ultra M-Spec is available in a variety of sizes and offsets to fit a wide range of vehicles.",
      images: ['/images/wheels/te37-ultra-mspec.png'],
    },
    {
      id: '3ff6e32b-0d3f-46c7-b316-4a3280f389a8',
      categoryId: '2de6d922-1d10-4f09-bd96-93e8f51eea71',
      name: 'Volk Racing TE37 Ultra M-Spec',
      price: 1249,
      description:
        "The TE37 Ultra M-Spec is a limited edition wheel that is designed to be the ultimate wheel for the track. It is a 6-spoke design that is made using Volk Racing's Mold Form Forging technology. This technology allows the wheel to be both lightweight and strong. The TE37 Ultra M-Spec is available in a variety of sizes and offsets to fit a wide range of vehicles.",
      images: ['/images/wheels/te37-ultra-mspec.png'],
    },
    {
      id: 'a4bbe0d2-6b66-4718-b3f9-f978a9e84d3e',
      categoryId: '2de6d922-1d10-4f09-bd96-93e8f51eea71',
      name: 'Volk Racing TE37 Ultra M-Spec',
      price: 1249,
      description:
        "The TE37 Ultra M-Spec is a limited edition wheel that is designed to be the ultimate wheel for the track. It is a 6-spoke design that is made using Volk Racing's Mold Form Forging technology. This technology allows the wheel to be both lightweight and strong. The TE37 Ultra M-Spec is available in a variety of sizes and offsets to fit a wide range of vehicles.",
      images: ['/images/wheels/te37-ultra-mspec.png'],
    },
    {
      id: '2e35d062-4956-4e12-a8e6-53ca7ada2080',
      categoryId: '2de6d922-1d10-4f09-bd96-93e8f51eea71',
      name: 'Volk Racing TE37 Ultra M-Spec',
      price: 1249,
      description:
        "The TE37 Ultra M-Spec is a limited edition wheel that is designed to be the ultimate wheel for the track. It is a 6-spoke design that is made using Volk Racing's Mold Form Forging technology. This technology allows the wheel to be both lightweight and strong. The TE37 Ultra M-Spec is available in a variety of sizes and offsets to fit a wide range of vehicles.",
      images: ['/images/wheels/te37-ultra-mspec.png'],
    },
    {
      id: 'aca8fe47-79fd-4c1e-810f-881496873609',
      categoryId: '2de6d922-1d10-4f09-bd96-93e8f51eea71',
      name: 'Volk Racing TE37 Ultra M-Spec',
      price: 1249,
      description:
        "The TE37 Ultra M-Spec is a limited edition wheel that is designed to be the ultimate wheel for the track. It is a 6-spoke design that is made using Volk Racing's Mold Form Forging technology. This technology allows the wheel to be both lightweight and strong. The TE37 Ultra M-Spec is available in a variety of sizes and offsets to fit a wide range of vehicles.",
      images: ['/images/wheels/te37-ultra-mspec.png'],
    },
    {
      id: '171849a8-ba79-45f3-9270-7543baf761e8',
      categoryId: '2de6d922-1d10-4f09-bd96-93e8f51eea71',
      name: 'Volk Racing TE37 Ultra M-Spec',
      price: 1249,
      description:
        "The TE37 Ultra M-Spec is a limited edition wheel that is designed to be the ultimate wheel for the track. It is a 6-spoke design that is made using Volk Racing's Mold Form Forging technology. This technology allows the wheel to be both lightweight and strong. The TE37 Ultra M-Spec is available in a variety of sizes and offsets to fit a wide range of vehicles.",
      images: ['/images/wheels/te37-ultra-mspec.png'],
    },
    {
      id: '2f58fc7d-3721-4ff3-bda8-0f9f0e0aa9fd',
      categoryId: '2de6d922-1d10-4f09-bd96-93e8f51eea71',
      name: 'Work Meister S1',
      price: 699,
      description:
        "The Work Meister S1 is a classic wheel that has been around for over 30 years. It is a 3-piece wheel that is made using Work's Advanced Metal Forming technology. This technology allows the wheel to be both lightweight and strong. The Meister S1 is available in a variety of sizes and offsets to fit a wide range of vehicles.",
      images: ['/images/wheels/work-meister-s1.png'],
    },
    {
      id: '13114cb0-31cf-474c-9f30-9c6c6f2a7baf',
      categoryId: '2de6d922-1d10-4f09-bd96-93e8f51eea71',
      name: 'Enkei Raijin',
      price: 499,
      description:
        "The Enkei Raijin is a 10-spoke wheel that is made using Enkei's MAT technology. This technology allows the wheel to be both lightweight and strong. The Raijin is available in a variety of sizes and offsets to fit a wide range of vehicles.",
      images: ['/images/wheels/enkei-raijin.png'],
    },
    {
      id: 'cdcd7ad9-0e5f-46c8-9547-6cfe8e710fe6',
      categoryId: '2de6d922-1d10-4f09-bd96-93e8f51eea71',
      name: 'Weds Maverick 1410s',
      price: 3399,
      description:
        "The Weds Maverick 1410s is a 10-spoke wheel that is made using Weds' AMF technology. This technology allows the wheel to be both lightweight and strong. The Maverick 1410s is available in a variety of sizes and offsets to fit a wide range of vehicles.",
      images: ['/images/wheels/weds-maverick-1410s.png'],
    },
    {
      id: 'ec813b23-4504-44d1-b722-d4434e2cc3c3',
      categoryId: '35117863-1e5e-436c-8eaa-f0278e775954',
      name: 'BC Racing BR Series Coilovers',
      price: 1299,
      description:
        'The BC Racing BR Series Coilovers are the perfect choice for street driving with a dash of weekend warrior track action. Featuring easily accessible adjustment knobs and separately adjustable ride height, the BR series makes adjusting and maintaining your performance coilover system easier than ever. Ride height is independently user adjustable so you can dial in the exact look to reflect your driving style and performance needs. BC’s patented concave lower locking ring keeps all adjustments locked in and ready for precise predicable feed back in any scenario. BR series coilovers provide a strong, complete and attractive coilover system at a great price.',
      images: ['/images/suspensions/bc-racing-br-series-coilovers.png'],
    },
    {
      id: '922dc1a1-8ed2-4306-ac1a-52091d62f5fa',
      categoryId: '35117863-1e5e-436c-8eaa-f0278e775954',
      name: 'BC Racing BR Series Coilovers',
      price: 1299,
      description:
        'The BC Racing BR Series Coilovers are the perfect choice for street driving with a dash of weekend warrior track action. Featuring easily accessible adjustment knobs and separately adjustable ride height, the BR series makes adjusting and maintaining your performance coilover system easier than ever. Ride height is independently user adjustable so you can dial in the exact look to reflect your driving style and performance needs. BC’s patented concave lower locking ring keeps all adjustments locked in and ready for precise predicable feed back in any scenario. BR series coilovers provide a strong, complete and attractive coilover system at a great price.',
      images: ['/images/suspensions/bc-racing-br-series-coilovers.png'],
    },
    {
      id: '10ee8039-1ace-4f5a-886a-89ca32ad6e64',
      categoryId: '8cca6c90-ffd1-45a1-9533-eba556516be1',
      name: 'Invidia Q300 Catback Exhaust',
      price: 899,
      description:
        'The Invidia Q300 Catback Exhaust is constructed with high-quality SUS304 stainless steel, CNC-machined flanges, and manufactured with a polished finish. Each system features mandrel-bent stainless steel piping for maximum exhaust flow and reduced back pressure. These exhausts are engineered to produce strong mid to top-end power gains, as well as an increase in horsepower and torque.',
      images: ['/images/exhausts/invidia-q300-lexus-rc350.png'],
    },
    {
      id: 'd0c560af-340f-411c-a6a4-4b3595b38056',
      categoryId: '8cca6c90-ffd1-45a1-9533-eba556516be1',
      name: 'Malian Exhausts Catback Performance Exhaust',
      price: 399,
      description:
        'The Malian Exhausts Catback Performance Exhaust is constructed with high-quality SUS304 stainless steel, CNC-machined flanges, and manufactured with a polished finish. Each system features mandrel-bent stainless steel piping for maximum exhaust flow and reduced back pressure. These exhausts are engineered to produce strong mid to top-end power gains, as well as an increase in horsepower and torque.',
      images: ['/images/exhausts/catback-performance-e46.png'],
    },
    {
      id: '5f771e7d-d1d8-42cd-9921-86ca0c726d74',
      categoryId: 'b6ffa21e-32da-403f-b873-012bc4d9a467',
      name: 'Bride Zeta III',
      price: 799,
      description:
        'The Bride Zeta III is a full bucket seat that is designed for the ultimate in safety, support, and comfort. It is a FIA approved seat that is made using a combination of aramid and carbon fiber. This combination of materials makes the Zeta III both lightweight and strong. The Zeta III is available in a variety of sizes to fit a wide range of drivers.',
      images: ['/images/interior/bride-zeta-iii.png'],
    },
    {
      id: '13be6b09-a648-415d-8fc0-908446e3c8e2',
      categoryId: 'b6ffa21e-32da-403f-b873-012bc4d9a467',
      name: 'Depo Gauge 85mm Speedometer',
      price: 119,
      description:
        'The Depo Gauge 85mm Speedometer is a digital speedometer that is designed to be the ultimate gauge for the track. It is a 85mm diameter gauge that is made using plastic. The Depo Gauge 85mm Speedometer is available in a variety of sizes to fit a wide range of vehicles.',
      images: ['/images/interior/depo-gauge-speedometer.png'],
    },
  ];

  for (const product of products) {
    try {
      const { categoryId, ...rest } = product;
      const createdProduct = await prisma.product.create({
        data: {
          ...rest,
          slug: createSlug(product.name),
          category: { connect: { id: categoryId } },
        },
      });
      console.log(`Created product: ${createdProduct.name}`);
    } catch (error) {
      console.error(`Error creating product: ${product.name}`, error);
    }
  }
};

const seedCollections = async () => {
  const collections = [
    {
      name: 'Best of JDM',
      coverImage: '/images/collections/best-of-jdm.png',
      description:
        'The Best of JDM collection features the best products from Japan. From wheels to exhausts, this collection has everything you need to make your car stand out.',
      productIds: [
        '144cc549-5e12-4241-bc74-edb1d4dec789',
        '5f771e7d-d1d8-42cd-9921-86ca0c726d74',
        '13114cb0-31cf-474c-9f30-9c6c6f2a7baf',
        'cdcd7ad9-0e5f-46c8-9547-6cfe8e710fe6',
      ],
    },
    {
      name: 'Best of Euro',
      coverImage: '/images/collections/best-of-euro.png',
      description:
        'The Best of Euro collection features the best products from Europe. From wheels to exhausts, this collection has everything you need to make your car stand out.',
      productIds: ['13be6b09-a648-415d-8fc0-908446e3c8e2'],
    },
    {
      name: 'Recommended',
      coverImage: '/images/collections/recommended.png',
      description:
        'The Recommended collection features the best products from our team. From wheels to exhausts, this collection has everything you need to make your car stand out.',
      productIds: [
        '2f58fc7d-3721-4ff3-bda8-0f9f0e0aa9fd',
        'aca8fe47-79fd-4c1e-810f-881496873609',
        'a4bbe0d2-6b66-4718-b3f9-f978a9e84d3e',
        '171849a8-ba79-45f3-9270-7543baf761e8',
        'ec813b23-4504-44d1-b722-d4434e2cc3c3',
        '922dc1a1-8ed2-4306-ac1a-52091d62f5fa',
        'd0c560af-340f-411c-a6a4-4b3595b38056',
      ],
    },
  ];

  for (const collection of collections) {
    try {
      const { productIds, ...rest } = collection;

      const createdCollection = await prisma.collection.create({
        data: {
          ...rest,
          slug: createSlug(collection.name),
          products: {
            connect: productIds.map((id) => ({ id })),
          },
        },
      });
      console.log(`Created collection: ${createdCollection.name}`);
    } catch (error) {
      console.error(`Error creating collection: ${collection.name}`, error);
    }
  }
};

const main = async () => {
  await seedCategories();
  await seedProducts();
  await seedCollections();
};

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
