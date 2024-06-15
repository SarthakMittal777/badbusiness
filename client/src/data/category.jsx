import customerservice from "/static/category-icons/health.png";
import innovation from "/static/category-icons/skills.png";
import strategy from "/static/category-icons/entrepreneurship.png";
import personaldevelopment from "/static/category-icons/decision-making.png";
import financialLiteracy from "/static/category-icons/financial-literacy.png";
import sustainability from "/static/category-icons/relationships.png";
import networking from "/static/category-icons/spirituality.png";
import marketing from "/static/category-icons/marketing.jpeg";
import entrepreneurship from "/static/category-icons/entrepreneurship.png";
import { GoGraph } from "react-icons/go";
import { IoEarthOutline } from "react-icons/io5";
import { LiaIndustrySolid } from "react-icons/lia";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FaShopify } from "react-icons/fa";
import { MdDeveloperMode, MdManageAccounts } from "react-icons/md";
import { GoLaw } from "react-icons/go";
import { IoIosDesktop } from "react-icons/io";
import { GiHumanPyramid } from "react-icons/gi";
import { IoSettings } from "react-icons/io5";

const categoryData = [
  {
    name: "Entrepreneurship",
    image: entrepreneurship,
    slug: "entrepreneurship",
    isIcon: false,
  },
  {
    name: "Marketing",
    image: marketing,
    slug: "marketing",
    isIcon: false,
  },
  {
    name: "Sales",
    image: GoGraph,
    slug: "sales",
    isIcon: true,
  },
  {
    name: "Finance",
    image: financialLiteracy,
    slug: "financial-literacy",
    isIcon: false,
  },
  {
    name: "Operations",
    image: IoSettings,
    slug: "operations",
    isIcon: true,
  },
  {
    name: "Human Resources",
    image: GiHumanPyramid,
    slug: "human-resources",
    isIcon: true,
  },
  {
    name: "Technology",
    image: IoIosDesktop,
    slug: "technology",
    isIcon: true,
  },
  {
    name: "Legal",
    image: GoLaw,
    slug: "law",
    isIcon: true,
  },
  {
    name: "Leadership and Management",
    image: MdManageAccounts,
    slug: "leadership-management",
    isIcon: true,
  },
  {
    name: "Product Development",
    image: MdDeveloperMode,
    slug: "product-development",
    isIcon: true,
  },
  {
    name: "Customer Service",
    image: customerservice,
    slug: "customer-service",
    isIcon: false,
  },
  {
    name: "Strategy",
    image: strategy,
    slug: "strategy",
    isIcon: false,
  },
  {
    name: "Innovation",
    image: innovation,
    slug: "innovation",
    isIcon: false,
  },
  {
    name: "E-Commerce",
    image: FaShopify,
    slug: "e-commerce",
    isIcon: true,
  },
  {
    name: "Industry Specific Domains",
    image: LiaIndustrySolid,
    slug: "industry-specific-domains",
    isIcon: true,
  },
  {
    name: "Networking and Relationships",
    image: networking,
    slug: "networking-relationships",
    isIcon: false,
  },
  {
    name: "Sustainability and Ethics",
    image: sustainability,
    slug: "sustainability-ethics",
    isIcon: false,
  },
  {
    name: "Global Business",
    image: IoEarthOutline,
    slug: "global-business",
    isIcon: true,
  },
  {
    name: "Personal Development",
    image: personaldevelopment,
    slug: "personal-development",
    isIcon: false,
  },
  {
    name: "Case Studies and Success Stories",
    image: HiOutlineDocumentReport,
    slug: "case-studies-success-stories",
    isIcon: true,
  },
];

export default categoryData;
