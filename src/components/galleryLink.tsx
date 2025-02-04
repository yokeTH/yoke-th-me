import React from 'react';
import Image from "next/image";
import { ExternalLink } from 'lucide-react';

interface LinkItem {
    title: string;
    url: string;
    thumbnail: string;
}

interface LinkGalleryProps {
    links: LinkItem[];
}

const LinkGallery: React.FC<LinkGalleryProps> = ({ links }) => {
    if (links.length === 0) {
        return (
            <div className="p-4 text-center text-gray-500">
                No links to display
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {links.map((link, index) => (
                <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative group hover:scale-105 transition-transform"
                >
                    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                        <Image
                            src={link.thumbnail}
                            alt={link.title}
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-3">
                            <h3 className="font-semibold text-sm truncate">
                                {link.title}
                            </h3>
                            <div className="flex items-center text-xs text-gray-500 mt-1">
                                <ExternalLink size={12} className="mr-1" />
                                <span className="truncate">{link.url}</span>
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default LinkGallery;