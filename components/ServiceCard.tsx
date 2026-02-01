'use client';

import { motion } from 'framer-motion';
import { Package, Users, Trash2, Home, Box, Truck, Wrench, Sofa, Recycle, Building, MapPin, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
    icon: 'package' | 'users' | 'trash' | 'home' | 'box' | 'truck' | 'wrench' | 'sofa' | 'recycle' | 'building' | 'map-pin';
    title: string;
    description: string;
    delay?: number;
}

const iconMap: Record<string, LucideIcon> = {
    package: Package,
    users: Users,
    trash: Trash2,
    home: Home,
    box: Box,
    truck: Truck,
    wrench: Wrench,
    sofa: Sofa,
    recycle: Recycle,
    building: Building,
    'map-pin': MapPin,
};

export default function ServiceCard({ icon, title, description, delay = 0 }: ServiceCardProps) {
    const Icon = iconMap[icon];

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="glass p-8 rounded-2xl hover-lift cursor-pointer group"
        >
            <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </motion.div>
    );
}
