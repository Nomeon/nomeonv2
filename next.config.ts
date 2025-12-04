import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { withBotId } from "botid/next/config";

const nextConfig: NextConfig = {};

const withNextIntl = createNextIntlPlugin();
export default withBotId(withNextIntl(nextConfig));
