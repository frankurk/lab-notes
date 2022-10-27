import React from "react";
import {
    describe, expect, it, vi,
} from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../components/Header.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

/**
* @vitest-environment jsdom
*/

describe("Header component", () => {

    it('renders labnotes title', () => {
        render(<Router><Header /></Router>);
        const title = screen.getByText('LabNotes');
        expect(title).toBeInTheDocument();
    })
    
    it('renders avatar button', () => {
        render(<Router><Header /></Router>);
        const avatarButton = screen.getByRole('button', { src: 'Avatar' });
        expect(avatarButton).toBeInTheDocument();
    })
    
    it('shows menu when clicked', () => {
        render(<Router><Header /></Router>);
        const avatarButton = screen.getByRole('button');
        const settingsOption = screen.getByRole('button');
    
        fireEvent.click(avatarButton);
        expect(settingsOption).toBeInTheDocument();
    })

})

