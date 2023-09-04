"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";

const navigation = [
    { name: "Dashboard", href: "/" },
    { name: "Playground", href: "/playground" },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Test({ user }: { user: any }) {
    const pathname = usePathname();

    return (
        <Disclosure as="nav" className="nav">
            {({ open }) => (
                <>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </>
            )}
        </Disclosure>
    );
}
